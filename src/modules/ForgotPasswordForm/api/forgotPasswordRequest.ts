import {IForgotPasswordData} from "../types";
import {AppDispatch} from "../../../store/store";
import $host from "../../../http/host";

type AsyncRequest = (dispatch: AppDispatch) => Promise<void>;

interface RegisterUserResponse {
    exp: string;
    name: string;
    token: string;
}

export const forgotPasswordRequest = ({email}: IForgotPasswordData): AsyncRequest => {
    return async () => {
        try {
            await $host.post<RegisterUserResponse>('/forget_password', {
                email: email
            });

        } catch (e) {
            console.log(e);
        }
    }
}