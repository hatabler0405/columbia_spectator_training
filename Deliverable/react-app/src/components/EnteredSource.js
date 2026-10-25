function EnteredSource({id, name, email}) {
    return (
        <div>
            <ul class = "OBox">
                <li> 
                    <span class = "Num">{id}</span>
                    <span class="Name">{name}</span>
                    <span class = "Email">{email}</span>
                    <button class = "Delete" type="button">DELETE</button>
                </li>
            </ul>
        </div>
    );
}
export default EnteredSource;