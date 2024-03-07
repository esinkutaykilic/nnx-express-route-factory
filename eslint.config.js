import google from 'eslint-config-google';

export default [{
    rules: {
        ...google.rules,
        'indent': [2, 4],
        'max-len': [
            google.rules['max-len'][0],
            {
                ...google.rules['max-len'][1],
                ignoreComments: true,
            },
        ],
    },
}];
