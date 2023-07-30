import {v4 as uuid} from 'uuid';

export function codeGenerator(){
    const six_digit_code = uuid().slice(0,6);
    return six_digit_code;
}

