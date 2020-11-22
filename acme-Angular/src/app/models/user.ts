export class User {
    constructor(
        _id = "", name = "", email = "", password = "",
        gender = "", birth_date = "", city = "",
        photo_path = "", is_active = false, role = ""
    )
    {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.birth_date = birth_date;
        this.city = city;
        this.photo_path = photo_path;
        this.is_active = is_active;
        this.role = role;
    }

    _id: String;
    name: string;
    email: String;
    password: String;
    gender: String;
    birth_date: String;
    city: String;
    photo_path: String;
    is_active: boolean;
    role: String;
}