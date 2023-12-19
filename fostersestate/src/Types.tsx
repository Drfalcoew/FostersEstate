export interface SchedulePropsData {
    fullName: string;
    email: string;
    orderNumber: string;
}

export interface EmailRecipient {
    recipientEmail: string;
    recipientName: string;
    phoneNumber: string;
    subject: string;
    message: string;
    preferredDate: string;
    comments: string;
}