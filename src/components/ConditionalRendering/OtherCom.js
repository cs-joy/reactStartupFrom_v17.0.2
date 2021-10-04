import React from 'react';

// This component is loaded dynamically
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function OtherCom() {
    return (
        // Displays <Spinner> until OtherComponent loads
        <React.Suspense fallback={<Spinner />}>
            <div>
                <OtherComponent />
            </div>
        </React.Suspense>
    );
}

export default OtherCom
