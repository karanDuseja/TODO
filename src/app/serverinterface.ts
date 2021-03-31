export interface server{
    email: string,
    password: {
        type: String,
        required : false
     },
     
        radio: {
            type: String,
        required : false
        },
        secondradio: {
            type: String,
        required : false
        },
        thirdradio:{
            type: String,
        required : false
        },
        checkbox:{
            type: String
        }
}