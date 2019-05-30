import formatDate from '../../utils/formatDate';

test('should return a readable date format', () => {
    expect(formatDate('2019-05-31T10:59:12.703Z')).toBe('May 31, 2019, 10:59 AM');
});
