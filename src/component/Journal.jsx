import React from 'react';

const Journal = () => {
    const randomEntries = [
        "Today was a productive day! I managed to complete my tasks ahead of schedule.",
        "I went for a walk in the park and enjoyed the fresh air. Nature is so refreshing!",
        "Tried a new recipe today, and it turned out amazing. Cooking is so therapeutic.",
        "Spent some time reading a book. It's fascinating how stories can transport you to another world.",
        "Had a great conversation with an old friend. It felt good to reconnect.",
        "Worked on a personal project today. Progress feels so rewarding!",
        "Took some time to meditate and clear my mind. Feeling more focused now.",
        "Watched a documentary about space exploration. The universe is so vast and mysterious!",
        "Started learning a new skill today. Excited to see where this journey takes me.",
        "Enjoyed a quiet evening with a cup of tea and some good music. Perfect way to unwind."
    ];

    const getRandomEntry = () => {
        const randomIndex = Math.floor(Math.random() * randomEntries.length);
        return randomEntries[randomIndex];
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Random Journal Entry</h1>
            <p>{getRandomEntry()}</p>
        </div>
    );
};

export default Journal;