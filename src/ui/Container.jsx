import { twMerge } from 'tailwind-merge'
const Container = ({children , className, id}) => {
    const newClass = twMerge('max-w-[1300px] py-4 mx-auto      ', className)
    return (
        <div id={id} className={newClass}>
            {children}
        </div>
    );
};

export default Container;