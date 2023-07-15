const onChangeInputHandler = () => {

    // collect data from input
    let data = document.getElementById('data').value
    console.log(data)

    // set value of p to data
    document.getElementById('show').innerHTML = data

}   