const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    albumTitle: 'Secreto de Amor',
    artist: 'Joan Sebastian',
    tracks: ['Un Idiota', 'Me Gustas']
  },
  5439: {
    albumTitle: 'Vicente Fernandez para siempre',
    artist: 'Vicente Fernandez',
    tracks: ['Un Millon de Primaveras', 'El Chofer']
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    records[id][prop] = records[id][prop] || []; 
    records[id][prop].push(value); 
  }

  return records;
}

const updatedRecords = updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(updatedRecords);




// opcion 2 

function updateRecords(records, id, prop, value) {
  let updatedRecords = JSON.parse(JSON.stringify(records));

  if (value === "") {
      delete updatedRecords[id][prop];
  } else if (prop !== "tracks") {
      updatedRecords[id][prop] = value;
  } else {
      if (!updatedRecords[id].hasOwnProperty("tracks")) {
          updatedRecords[id]["tracks"] = [];
      }

      if (prop === "tracks" && value !== "") {
          updatedRecords[id]["tracks"].push(value);
      }
  }

  return updatedRecords;


}