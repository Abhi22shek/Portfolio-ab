import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: -50, x: '-50%' }}
      className={`fixed top-6 left-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
        type === 'success'
          ? 'bg-green-600 text-white'
          : 'bg-red-600 text-white'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className='size-5' />
      ) : (
        <AlertCircle className='size-5' />
      )}
      <p className='font-medium'>{message}</p>
      <button
        onClick={onClose}
        className='ml-2 hover:opacity-80 transition-opacity'
        aria-label='Close notification'
      >
        <X className='size-5' />
      </button>
    </motion.div>
  );
};

interface ToastContainerProps {
  toast: { message: string; type: 'success' | 'error' } | null;
  onClose: () => void;
}

export const ToastContainer = ({ toast, onClose }: ToastContainerProps) => {
  return (
    <AnimatePresence>
      {toast && <Toast message={toast.message} type={toast.type} onClose={onClose} />}
    </AnimatePresence>
  );
};
