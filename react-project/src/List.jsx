
function List() {
    const fruits = [
        {id: 1, name: "apple", calories: 30}, 
        {id: 2, name: "banana", calories: 45}, 
        {id: 3, name: "orange", calories: 37}];
    fruits.sort((a, b) => b.name.localeCompare(a.name));
    fruits.sort((a, b) => b.calories - a.calories)
    const listItems = fruits.map(fruit => <li key={fruit.id}><b>{fruit.name}:</b> &nbsp;{fruit.calories}</li>);
    return(
        <ol>{listItems}</ol>
    );
}

export default List