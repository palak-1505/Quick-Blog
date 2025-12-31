import React from 'react'
import { useEffect } from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

function CommentTableData({comment, fetchComments}) {
    const {blog , createdAt, _id} = comment; 
    const BlogDate = new Date(createdAt).toLocaleDateString();

    const {axios, fetchAllComments} = useAppContext();

    const approveComment = async () => {
        try {
            const {data} = await axios.patch(`/api/blog/approve-comment/${_id}`);   
            if(data.success){
                toast.success(data.message);
                fetchAllComments();
            }else{
                toast.error(data.message);
            }   
        } catch (error) {
            toast.error(error.message);
        }
    }

    const deleteComment = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
        if (!confirmDelete) return;
        try {
            const {data} = await axios.delete(`/api/blog/comments/${_id}`);
            if(data.success){
                toast.success(data.message);
                fetchAllComments();
            }else{
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

   

  return (
   
    <tr className='order-y border-gray-300'>
        <td className='px-6 py-4'>
            <b className='font-medium text-gray-600'>Blog</b> : {blog.title} 
            <br />
            <br />
            <b className='font-medium text-gray'>Name</b> : {comment.name}
            <br />
            <br />
            <b className='font-medium text-gray'>Comment</b> : {comment.content}
        </td>
        <td className='px-6 py-4 max-sm:hidden'>
            {BlogDate}
        </td>
        <td className='px-6 py-4'>
            <div className='inline-flex items-center gap-4'>
                {!comment.isApproved ?
                <img onClick={approveComment} src={assets.tick_icon} 
                className='w-5 hover:scale-110 transition-all cursor-pointer'/>
                :
                <p className='text-xs border border-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>    
                }
                <img src={assets.bin_icon} alt="" 
                onClick={deleteComment}
                className='w-5 hover:scale-110 transition-all cursor-pointer'/>
            </div>

        </td>
    </tr>
  )
}

export default CommentTableData