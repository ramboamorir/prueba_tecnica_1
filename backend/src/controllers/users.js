import userModel from '../models/user.js';
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, lastname, email, password } = req.body;

        // Verificar si el usuario ya existe
        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        // Crear usuario
        const newUser = new userModel({
            name,
            lastname,
            email,
            password,
        });

        await newUser.save();

        res.status(201).json({ message: "Usuario registrado correctamente" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar usuario
        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        // Verificar contraseña
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        // Generar token
        const token = jwt.sign(
            { id: user._id },
            "secretKey", // usa variables de entorno en producción
            { expiresIn: "10h" }
        );

        res.json({
            message: "Login exitoso",
            token,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const userController = {
    // Methode by create users
    // create: async(req, res)=> {
    //     try {
    //         const { name, lastname, email, password} = req.body;

    //         const newUser = new userModel({
    //             name,
    //             lastname,
    //             email,
    //             password
    //         });
    //         await newUser.save();
    //         res.status(201).json({message: "Usuario ha sido creado con exito."})
    //     } catch (error) {
    //         res.status(400).json({message: `Usuario no ha sido creado. ${error}`})
    //     }

    // },

    // Methode by read all users created
    readAll: async (req, res) => {
        try {
            const allUsers = await userModel.find();
            res.status(201).json({ data: allUsers })
        }
        catch (error) {
            res.status(500).json({ error: 'Error al leer los datos de los usuarios.' });
        }
    },

    // Methode by read user specific
    read: async (req, res) => {
        try {
            const { id } = req.params
            const userFound = await userModel.findById(id);
            if (!userFound) {
                res.status(404).json({ message: 'Usuario no encontrado' })
            } else {
                res.status(201).json({ data: userFound });
            }

        } catch (error) {
            res.status(500).json({ error: 'Error al leer los datos del usuario.' });
        }
    },

    // Methode by update user specific
    update: async (req, res) => {
        try {
            const { id } = req.params
            const { name, lastname, email, password } = req.body
            const userUpdate = await userModel.findByIdAndUpdate(id, {
                name,
                lastname,
                email,
                password,
            });
            if (!userUpdate) {
                res.status(404).json({ message: 'Usuario no encontrado' })
            } else {
                res.status(201).json({ data: userUpdate, message: 'Usuario actualizado' });
            }

        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar los datos del usuario.' });
        }
    },

    // Methode by delete user specific
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const userDelete = await userModel.findByIdAndDelete(id);
            if (!userDelete) {
                res.status(404).json({ message: 'Usuario no encontrado' })
            } else {
                res.status(201).json({ data: userDelete, message: 'Usuario eliminado' });
            }

        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar los datos del usuario.' });
        }
    }
}

export default userController;