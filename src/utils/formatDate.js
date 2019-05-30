const formatDate = (createdon) => {
    const dateObject = new Date(createdon);
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: 'numeric'
    }).format(dateObject);

    return formattedDate;
};

export default formatDate;
