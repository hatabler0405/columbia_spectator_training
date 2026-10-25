function SavedSource({name, email}){
    return (
        <div class = "AddSource">
            <div class="SourceText"> 
                <label for="Source Name: ">{name}: </label>
                <input type="text"></input>
            </div>
            <div class = "SourceText">
                <label for="Source Email: ">{email}: </label>
                <input type="text"></input>
            </div>
            <div>
                <button class = "ADD" type="button">ADD</button>
            </div> 
        </div>
    );
}
export default SavedSource;