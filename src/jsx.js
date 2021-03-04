
export const name = 'JISU';
export const welcome = (<h1>Hello! This is <b>{name}</b>'s first React APP.</h1>);

export function Gogodan() {
    const gogotable=[];
    for (let i = 1; i < 10; i++) {
        const gogotbody = [];
        gogotbody.push(<thead><tr><th>{i} 단</th></tr></thead>)
        const gogotr = [];
        for (let j = 1; j < 10; j++) {
            gogotr.push(
                <tr>
                    <td>{i} x {j} = {i * j}</td>
                </tr>
            );
        }
        gogotbody.push(<tbody>{gogotr}</tbody>);
        gogotable.push(<table>{gogotbody}</table>);
    }
    return gogotable;
}

export function Localtime(){
    let timeelem = (
        <div>
            <h3>{new Date().toLocaleDateString()}</h3>
        </div>
    );
    return timeelem;
}