#! /bin/sh
echo 2 > /proc/cpu/alignment
echo 100 > /proc/sys/vm/dirty_writeback_centisecs # cacheˢ�����ڸ�Ϊ1s
echo 500 > /proc/sys/vm/dirty_expire_centisecs # cache��ʱʱ���Ϊ5s
echo 50 > /proc/sys/vm/vfs_cache_pressure # �����ڱ���directory��inode cache
echo 30 > /proc/sys/vm/swappiness # ���ʹ��̽����̶�
echo 10 > /proc/sys/vm/dirty_ratio # ���������ݴﵽ10%����ʱ������д������
echo 2 > /proc/cpu/alignment # ��ֹ����Alignment trap�Ĵ���
echo "/home/core-%e-%p-%t" > /proc/sys/kernel/core_pattern # ����coredump�ļ�·��