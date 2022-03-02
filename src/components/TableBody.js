const TableBody = props => {
  const characters = props.characters.map((char, index) => {
    return (
      <tr key={index}>
        <td>
          { char.name }
        </td>
        <td>
          { char.job }
        </td>
        <td>
          <button
            onClick={() => props.removeCharacter(index) }
          >Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{characters}</tbody>
};

export default TableBody;
