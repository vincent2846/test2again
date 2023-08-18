import React from "react";
import Validator from "validatorjs";

const ShowErrors = ({errors}) => {
    return(
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error,i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}


export default class FormElement extends React.Component{

    state={
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }

    handleSubmit = (e)=> {
        e.preventDefault(); //biar linknya nga berubah atau ketambah dari hasil submit tadi
        
        this.setState({
            nama: '',
            jurusan: '',
            gender: '',
            alamat: '',
            member: false
        })
        const{nama, alamat} = this.state;

        let data = {nama,alamat};

        let rules = {
            nama: 'required',
            alamat: 'min:8|required'
        };

        let validation = new Validator(data, rules)
        validation.passes();
        this.setState({
            errors: [
                ...validation.errors.get('nama'),
                ...validation.errors.get('alamat')
            ]
        })
        if(validation.passes()){
            alert(`
            nama: ${this.state.nama}
            jurusan: ${this.state.jurusan}
            gender: ${this.state.gender}
            alamat: ${this.state.alamat}
            member: ${this.state.member ? 'Yes' : 'No'}
        `);
        }
    }

    render () {
        return(
            <div style={{margin: '100px auto', border: '1px solid gray', padding: '20px'}}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Regis</h4>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    Nama: <input 
                    type="text" 
                    name="nama" 
                    onChange={ e => this.setState({nama: e.target.value})}
                    value={this.state.nama} />
                </label>
                <br />
                <label htmlFor="">
                    Jurusan: <select name="jurusan" 
                    onChange={e => this.setState({jurusan: e.target.value})}
                    value={this.state.jurusan} >
                        <option value="">Pilih Jurusan</option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Sistem Informatika">Sistem Informatika</option>
                        <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                    </select>
                </label>
                <br />
                <label htmlFor="">
                    Jenis Kelamin:
                    <input type="radio" value="Laki laki" name="gender" 
                    onChange={e => this.setState({gender: e.target.value})}
                    /> Laki - Laki 
                    <input type="radio" value="Perempuan" name="gender"
                     onChange={e => this.setState({gender: e.target.value})}/> Perempuan 
                </label>
                <br />
                <label htmlFor="">
                    Alamat: <textarea cols="30" rows="10" name="alamat"
                     onChange={e => this.setState({alamat: e.target.value})}
                     value={this.state.alamat} ></textarea>
                </label>
                <br />
                <label >
                    Member: <input type="checkbox" checked={this.state.member} name="member"
                     onChange={e => this.setState({member: e.target.checked})}/>
                    <br />
                </label>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            </div>

        )
    }
}