import {ForwardRefRenderFunction, forwardRef} from 'react';
interface IButtonProps{
    title: string;
    className?: string;
    type?: string;
};

export const Button = ({title, className, type} : IButtonProps) => {
    const inner_button_type = ((type !== 'submit') ? 'button' : 'submit');
    
    return (
        <div className='flex items-center justify-center w-full'>
           <button  className={`${className} rounded-lg px-4 py-2 w-full `} type={(inner_button_type)}>{title}</button>
        </div>
    );
};