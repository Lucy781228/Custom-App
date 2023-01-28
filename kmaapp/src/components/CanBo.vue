<template>
    <div>
        <br>
        <NcButton
			:disabled="disabled"
			:readonly="readonly"
			type="primary">
			<template>Thêm mới</template>
		</NcButton>
        <br>
      <table>
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Đơn vị</th>
            <th>Tên người dùng</th>
            <th>Email</th>
            <th>Mật khẩu</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in rows" :key="item.id">
            <th>{{ item.fullname }}</th>
            <th>{{ item.birthday }}</th>
            <th>{{ item.group }}</th>
            <th>{{ item.username }}</th>
            <th>{{ item.email }}</th>
            <th>{{ item.password }}</th>
            <th>
              <NcActions>
                <NcActionButton>
                  <template #icon>
                    <Delete :size="20" />
                  </template>
                  Xóa
                </NcActionButton>
              </NcActions>
            </th>
          </tr>
        </tbody>
      </table>
      <div v-if="show">
        <NewUser />
      </div>
    </div>
  </template>
  
  <script>
  import { subscribe, unsubscribe } from "@nextcloud/event-bus";
  import { NcButton, NcActions, NcActionButton } from "@nextcloud/vue";
  import Delete from 'vue-material-design-icons/Delete'
  import Pencil from 'vue-material-design-icons/Pencil'
  import ViewList from 'vue-material-design-icons/ViewList'
  import NewUser from './NewUser'
  
  
  export default {
    name: "UserList",
    components: {
      NcButton,
      NcActions,
      NcActionButton,
      Delete,
      ViewList,
      Pencil,
      NewUser,
    },
    data() {
      return {
        show: false,
        rows: [
          {
            id: 1,
            fullname: "Nguyen Van B",
            birthday: "20/12/2001",
            group: "cntt",
            username: "123",
            email: "guhj@gmail.com",
            password: "abdc",
          },
          {
            id: 2,
            fullname: "Nguyen Van B",
            birthday: "20/12/2001",
            group: "cntt",
            username: "123",
            email: "guhj@gmail.com",
            password: "abdc",
          },
        ],
      };
    },
  };
  </script>
  <style scoped>
  table {
    table-layout: auto;
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    text-align: left;
    padding: 8px;
  }
  </style>
  