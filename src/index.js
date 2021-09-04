import './styles/index.scss';

const esr = {
    leather: 2,
    iron: 1, 
    refined: 4
}

const egr = {
    ...esr,
    leathers: 1,
    rm: 4
}
console.log(esr);
console.log(egr);
