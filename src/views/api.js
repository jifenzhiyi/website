import request from '@/utils/request';

// 加盟申请
const apply = (data) => request.send('/alliance-apply', { method: 'POST', data });

export default apply;
