import React from 'react'

interface ErrorComponentProps {
    retryFunction: () => void;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ retryFunction }) => {
    return (
        <div className="text-center p-5">
            <p>Something went wrong. Please try again.</p>
            <button className='error-button' onClick={retryFunction}>Try Again</button>
        </div>
    );
}

export default ErrorComponent;