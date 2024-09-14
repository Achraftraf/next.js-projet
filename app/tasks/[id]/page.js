import React from 'react'
import { getTask } from 'app/utils/actions';
import EditForm from '@/components/EditForm';
import Link from 'next/link'


const SingleTaskPage = async ({params}) => {
    const task = await getTask(params.id);
  return (
    <>
    <div className='mb-16'>
      <Link href='/tasks' className='btn btn-accent'>
        Back to Tasks
      </Link>
    </div>
    <EditForm task={task} />
  </>
  )
}

export default SingleTaskPage