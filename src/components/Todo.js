import React from 'react'

const Todo = () => {
    return (
        <div className='container'>
            <div className="row py-5 d-flex justify-content-center">
                <div className="col-8">
                    <div className="">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="write your task ... " />
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger text-white primary-bg">Add</button>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-4">
                    <div className='border border-secondary'>
                        <div className='text-white primary-bg text-center mb-0 py-2'>
                            <h6>To Do</h6>
                        </div>
                        <div className='p-2'>
                            <div className='py-2'>
                                 <p className='secondary-bg text-dark text-center mb-0 p-1 border border-secondary'>1111 2</p>
                            </div>
                            <div className='py-2'>
                                 <p className='secondary-bg text-dark text-center mb-0 p-1 border border-secondary'>1111 2</p>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='border border-secondary'>
                        <div className='text-white primary-bg text-center mb-0 py-2'>
                            <h6>In Progress</h6>
                        </div>
                        <div className='p-2'>

                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className='border border-secondary'>
                        <div className='text-white primary-bg text-center mb-0 py-2'>
                            <h6>Done</h6>
                        </div>
                        <div className='p-2'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo