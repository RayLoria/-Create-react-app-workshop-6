import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


const Table = props => {
  const { characters, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        characters={characters}
        removeCharacter={removeCharacter}
      />
    </table>
  );
}

export default Table;