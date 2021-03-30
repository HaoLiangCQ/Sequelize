async function getTable(){

    const url = new URL('api/dining');

    await fetch(url)
    .then(async (response) => {
        return response.json()
    })
    .then(async (data) => {

        const halls=data['data'];

        const placeholder = document.getElementById('table');

        const head = document.createElement('thead');
        const foot = document.createElement('tfoot');

        const headRow = document.createElement('tr');

        const H1 =document.createElement('th');
        const head1 = document.createElement('abbr');
        head1.setAttribute('title','id');
        head1.appendChild(document.createTextNode('id'));
        H1.appendChild(head1);
        headRow.appendChild(H1);

        const H2 =document.createElement('th');
        const head2 = document.createElement('abbr');
        head2.setAttribute('title','name');
        head2.appendChild(document.createTextNode('name'));
        H2.appendChild(head2);
        headRow.appendChild(H2);

        const H3 =document.createElement('th');
        const head3 = document.createElement('abbr');
        head3.setAttribute('title','address');
        head3.appendChild(document.createTextNode('address'));
        H3.appendChild(head3);
        headRow.appendChild(H3);

        head.appendChild(headRow);
        //foot.appendChild(headRow);

        placeholder.appendChild(head);
        //placeholder.appendChild(foot);

        const body = document.createElement('tbody');

        halls.forEach(element => {
            const row = document.createElement('tr');

            const index = document.createElement('th');
            index.appendChild(document.createTextNode(element['hall_id']));

            const name = document.createElement('th')
            name.appendChild(document.createTextNode(element['hall_name']));

            const type = document.createElement('th')
            type.appendChild(document.createTextNode(element['hall_address']));

            row.appendChild(index);
            row.appendChild(name);
            row.appendChild(type);

            body.appendChild(row);
        });

        
        placeholder.appendChild(body);
    }
    );

}