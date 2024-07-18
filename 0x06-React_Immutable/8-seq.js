import { Seq } from "immutable"

const object = {
    1: {
      score: 99,
      firstName: 'guillaume',
      lastName: 'salva',
    }
  };

export const printBestStudents = (object) => {
    const seq = Seq(object);

    const filtered = seq.filter((student) => {
        student.firstName.charAt(0).toUpperCase();
        return student.score > 70;
    })

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const JSObject = filtered.toJS();

    Object.keys(JSObject).map((key) =>  {
        JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
        JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
        return JSObject[key]
    });

    console.log(JSObject)
}