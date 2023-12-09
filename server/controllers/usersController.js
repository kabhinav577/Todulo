import { pool } from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user with the provided email already exists
    const [existingUser] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (existingUser.length > 0) {
      return res
        .status(400)
        .json({ msg: 'User with this email already exists' });
    }

    // Hash the password before storing it in the database
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the user into the database
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Replace this query with your MySQL query
    const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [
      email,
    ]);
    const user = result[0];

    if (!user) {
      return res.status(400).json({ msg: "User doesn't exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials.' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    delete user.password;

    res.status(200).json({ token, user });
  } catch (err) {
    console.log('Error in logging user', err);
    res.status(500).json({ error: err.message });
  }
};

// LOGOUT
export const logout = (req, res) => {};
