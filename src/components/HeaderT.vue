<script setup>
import LoginButton from "./Buttons/LoginButton.vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const backHome = () => {
  router.push("/");
};
const toBoard = () => {
  router.push("/board");
};
</script>

<template>
  <div class="navbar bg-base-100 opacity-90 backdrop-blur text-sans">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li tabindex="0">
            <a class="justify-between">
              杂项
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul class="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <a @click="backHome" class="btn btn-ghost normal-case text-xl text-bold">CupTreehole</a>
    </div>
    <div class="navbar-center hidden lg:flex"></div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal p-0 hidden lg:flex">
        <li>
          <a @click="toBoard">Board</a>
        </li>
        <li tabindex="0">
          <a>
            杂项
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul class="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
      <a class="btn">Login</a>
    </div>
  </div>
</template>
