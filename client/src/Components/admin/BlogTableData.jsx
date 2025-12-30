import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../Context/AppContext';
import toast from 'react-hot-toast';

function BlogTableData({blog, index}) {
    const {title , createdAt, isPublished} = blog;
    const BlogDate = new Date(createdAt).toLocaleDateString();

    const {axios, fetchBlogs} = useAppContext();

const handlePublishToggle = async () => {
    try {
        const { data } = await axios.patch(`/api/blog/toggle-publish/${blog._id}`);

    if (data.success) {
      toast.success(data.message);
      fetchBlogs();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  }
};


const handleDelete = async () => {
  const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
  if (!confirmDelete) return;

  try {
    const { data } = await axios.delete(`/api/blog/delete/${blog._id}`);
    if (data.success) {
      toast.success(data.message);
      fetchBlogs();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  }
};


  return (
    
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className='px-2 py-4 max-sm:hidden'>{BlogDate}</td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p className={`${blog.isPublished ? 'text-green-600' : 'text-red-700'}`}>
                {blog.isPublished ? 'Published' : 'Unpublished'}
            </p>
        </td>
        <td className='px-2 py-4 flex text-xs gap-3'>
            <button onClick={handlePublishToggle} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>
                {blog.isPublished ? 'Unpublish' : 'Publish'}
            </button>
            <img src={assets.cross_icon} onClick={handleDelete}
            className='w-7 hover:scale-110 transition-all cursor-pointer' alt="" />
        </td>
        
    </tr>
  )
}

export default BlogTableData