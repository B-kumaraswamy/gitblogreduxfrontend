import { useEffect, useState } from 'react';

function FloatingMessageComponent({ message }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log('Inside useEffect: message:', message);

        if (message) {
            console.log('Setting visible to true');
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 1000); // Display message for 3 seconds

            return () => clearTimeout(timer); // Cleanup function
        }
    }, [message]);

    console.log('message in the FloatingMessageComponent:', message);
    console.log('Visible:', visible);

    return visible ? (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                padding: '10px',
                borderRadius: '5px',
                display: visible ? 'block' : 'none'
            }}
        >
            {message}
        </div>
    ) : null;
}

export default FloatingMessageComponent;
