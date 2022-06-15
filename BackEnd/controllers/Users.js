import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const user = await Users.findAll({
            attributes: ['id', 'username']
        });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { username, password, confirmPassword } = req.body;
    if (password != confirmPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" })
    const salt = await bcrypt.genSalt();
    const hashPassowrd = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            username: username,
            password: hashPassowrd
        });
        res.json({ msg: "Register berhasil" });
    } catch (error) {
        console.log(error);

    }
}

export const login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where: { username: req.body.username }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "password salah" });
        const userId = user[0].id;
        const username = user[0].username;
        const accessToken = jwt.sign({ userId, username }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({ userId, username }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({
            refresh_token: refreshToken
        }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: true
        });
        res.json({ accessToken })
    } catch (error) {
        res.status(400).json({ msg: "Username tidak ditemukan" });
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    // 204 is no content
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    })
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}