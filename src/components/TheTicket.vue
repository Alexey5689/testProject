<template>
  <div class="ticketWrapper">
    <div class="ticket_Head">
      <h2>Карточка тикета</h2>
    </div>
    <div class="ruls">
      <p>{{ ticket.getShowResponse }}</p>
    </div>
    <form @submit.prevent="ticket.createTask" class="tiket_Body">
      <div class="tiketBody_Head">
        <h3>Содержание тикета</h3>
        <input type="text" class="ticketInput" v-model="ticket.taskName" />
      </div>
      <div class="tiketBody_content">
        <h3>Описание проблемы</h3>
        <textarea v-model="ticket.taskContent" cols="30" rows="10"> </textarea>
      </div>
      <div class="tiket_create">
        <button type="submit">Создать ticket</button>
      </div>
    </form>
  </div>
</template>
<script>
import { testTicket } from "@/stores/ticket";
export default {
  name: "Ticket",
  setup() {
    const ticket = testTicket();
    return {
      ticket,
    };
  },
};
</script>
<style src="@/components/componentStyle/tiket/tiketStyle.css" scoped></style>
