const Icons = {
    Add: require('./Add.svg'),
    Close_eye: require('./Close_eye.svg'),
    Create: require('./Create.svg'),
    Delete: require('./Delete.svg'),
    Eye: require('./Eye.svg'),
    Group_person: require('./Group_person.svg'),
    Log_out: require('./Log_out.svg'),
    Person: require('./Person.svg'),
    Profile: require('./Profile.svg'),
    Search: require('./Search.svg'),
    Logo: require('./Logo.svg'),
    Group: require('./Group.svg'),
    Group_2: require('./Group_2.svg'),
}

export function GetIcon(value:string) {
    switch (value) {
        case 'Add':
            return Icons.Add.default
        case 'Close_eye':
            return Icons.Close_eye.default
        case 'Create':
            return Icons.Create.default
        case 'Delete':
            return Icons.Delete.default
        case 'Eye':
            return Icons.Eye.default
        case 'Group_person':
            return Icons.Group_person.default
        case 'Log_out':
            return Icons.Log_out.default
        case 'Person':
            return Icons.Person.default
        case 'Profile':
            return Icons.Profile.default
        case 'Search':
            return Icons.Search.default
        case 'Logo':
            return Icons.Logo.default
        case 'Group':
            return Icons.Group.default
        case 'Group_2':
            return Icons.Group_2.default
        default:
            return null
    }
}