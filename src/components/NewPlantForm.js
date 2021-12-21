import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {

  const [formData, setFormData] = useState(
    {
      "id": "",
      "name": "",
      "image": "",
      "price": ""
    },
  )
function handleOnChange(e){
  setFormData ({...formData, [e.target.name] : e.target.value})
}

function handleSubmit (e) {
  e.preventDefault()
  addNewPlant(formData)
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleOnChange} value={formData.image}type="text" name="image" placeholder="Image URL" />
        <input onChange={handleOnChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
