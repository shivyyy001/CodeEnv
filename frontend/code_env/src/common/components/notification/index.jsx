import toast from 'react-hot-toast';

export const notifyMe = (type, message) => {
    if (type === 'success') {
        toast.success(message, {
            style: {
                backgroundColor: 'green',
                color: 'white',
            },
        });
    } else {
        toast.error(message, {
            style: {
                backgroundColor: '#cc0000',
                color: 'white',
            },
        });
    }
};
