import React from 'react';

function TodayDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);

    return (
    <div>
        Today is: {formattedDate}
    </div>
    );
}

export default TodayDate;