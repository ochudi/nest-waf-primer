export declare class CreateUserDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly email: string;
    readonly departmentId?: number;
    readonly dateOfBirth?: Date;
    readonly nationality?: string;
    readonly address?: string;
    readonly isActive?: boolean;
}
