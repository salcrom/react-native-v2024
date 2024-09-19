

export const BasicTypes = () => {
    const name:string = 'Sergio';
    const age:number = 37;
    const isActive: boolean = true;
    const powers:string[] = ['React','ReactNative','Angular','Vue','Qwik']

    powers.push('Next')
    
    return (
        <>
            <h3>Tipos básicos</h3>

            { name }{ age }{ isActive ? 'true' : 'false' }
            <br />
            {powers.join(', ')}
        </>
    )
}
