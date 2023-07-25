

export function UploadImg(){

// const [avatar, setAvatar] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        const file = e.target.file.files[0];
        const formData = new FormData();
        formData.append('image', file, file.name);
        // setAvatar(formData)
    }
    // console.log(avatar)
    return(
        <form onSubmit={handleSubmit}>
        <input  type="file" name="file"/>
        <button type="submit">Load</button>
        </form>
    )
}