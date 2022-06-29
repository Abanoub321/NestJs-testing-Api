
export default interface ResponseInterface {
    status: boolean;
    code: number;
    message?: string | undefined;
    data?: any | undefined;
} 
