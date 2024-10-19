export default function Nota({ propsNota }) {
    if (propsNota >= 90) {
        return <h1>Nota: {propsNota} Excelente</h1>
    }

    else if (propsNota <= 89 && propsNota > 70) {
        return <h1>Nota {propsNota} Bom</h1>
    }

    else if (propsNota <= 70) {
        return <h1>Nota {propsNota} Precisa Melhorar</h1>
    }
}