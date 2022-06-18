export type OptionsType = {
    rom: string;
    to: string;
    subject: string;
    body: string;
    attachments: Array<string> | any;
}

export type CallbackType = (success: boolean) => void | any;

export type OptionsTransportType = {
    host: string | undefined;
    port: string | undefined;
    secure: boolean;
    auth: {
        user: string | undefined;
        pass: string | undefined;
    };
    tls: {
        rejectUnauthorized: boolean;
    };
}
