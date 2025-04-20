export interface User {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone:string;
}

type UserWithoutConfirmPassword = Omit<User, 'confirmPassword'>;

