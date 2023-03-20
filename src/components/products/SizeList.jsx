import React from 'react'

function SizeList() {

    const sizes =[
        {
            id:0,
            name:'XS'
        },
        {
            id:1,
            name:'S'
        },
        {
            id:2,
            name:'M'
        },
        {
            id:3,
            name:'XL'
        },
        {
            id:4,
            name:'XXL'
        },
        {
            id:5,
            name:'3XL'
        },
    ]
  return (
    <main>
        <section className='my-2 border border-black p-3 flex gap-5'>
            {sizes.map((item)=>{
                return(
                    <div class="flex items-center " key={item.id}>
                        <input id="default-radio-1" type="radio" value={item.name} name="default-radio" class="w-4 h-4 bg-gray-100 border-gray-300 focus:bg-red-500 ring-offset-black focus:ring-black  focus:ring-2 rounded-full outline-none appearance-none ease duration-300"/>
                        <label for="default-radio-1" class="ml-2 font-medium text-black lg:text-xl">{item.name}</label>
                    </div>
                )
            })}
        </section>
    </main>
  )
}

export default SizeList