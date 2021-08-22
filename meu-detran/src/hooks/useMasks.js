const applyMask = (e, maskStr, replacePattern, replaceTemplate) => {
    const { target: input, nativeEvent: { inputType } } = e;
    let filteredValue = [...input.value.replace(/\D/g, '')];
    let maskedArr = [...maskStr.replace(/[^_]/g, '')];

    if (inputType === 'deleteContentBackward') return filteredValue.join('');
    for (let [index, char] of Object.entries(filteredValue)) {
        maskedArr[index] = char;
    }

    return maskedArr.join('').replace(replacePattern, replaceTemplate).slice(0, maskStr.length);
}

const cpfMask = (event) => {
    let maskStr = '___.___.___-__';
    let replaceRegex = /^([\d|_]{1,3})([\d|_]{1,3})([\d|_]{1,3})([\d|_]{1,2})/g;
    let template = '$1.$2.$3-$4';
    event.target.value = applyMask(event, maskStr, replaceRegex, template);
}

const dataMask = (event) => {
    let maskStr = '__/__/____';
    let replaceRegex = /^([\d|_]{1,2})([\d|_]{1,2})([\d|_]{1,2})/g;
    let template = '$1/$2/$3';
    event.target.value = applyMask(event, maskStr, replaceRegex, template);
}

const celularMask = (event) => {
    let maskStr = '(__) _____-____';
    let replaceRegex = /^([\d|_]{1,2})([\d|_]{1,5})([\d|_]{1,4})/g;
    let template = '($1) $2-$3';
    event.target.value = applyMask(event, maskStr, replaceRegex, template);
}

const telefoneMask = (event) => {
    let maskStr = '(__) ____-____';
    let replaceRegex = /^([\d|_]{1,2})([\d|_]{1,4})([\d|_]{1,4})/g;
    let template = '($1) $2-$3';
    event.target.value = applyMask(event, maskStr, replaceRegex, template);
}

const telOuCelMask = (event) => {
    const { value } = event.target;
    if (value.replace(/\D/g, '').length > 10) {
        celularMask(event);
    } else {
        telefoneMask(event);
    }
}

export default function useMasks() {
    return {
        cpfMask,
        dataMask,
        telefoneMask,
        celularMask,
        telOuCelMask
    }
}